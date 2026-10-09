import { projects } from './project-data.js';

export function initProjects() {
  const dialog = document.getElementById('case-dialog');
  const content = document.getElementById('case-content');
  if (!dialog || !content) return;

  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }

  function showProject(project) {
    const fragment = document.createDocumentFragment();
    const title = element('h2', project.title);
    title.id = 'case-title';
    title.tabIndex = -1;
    fragment.append(title, element('p', `${project.role} / ${project.context}`, 'case-meta'));

    if (project.image) {
      const figure = element('figure', '', 'case-image');
      const image = element('img');
      image.src = project.image;
      image.alt = project.caption;
      image.width = 1440;
      image.height = 1000;
      figure.append(image, element('figcaption', project.caption));
      fragment.append(figure);
    }

    const story = element('div', '', 'case-grid');
    for (const [heading, text] of [
      ['The problem', project.problem],
      ['My contribution', project.contribution],
      ['Delivered work', project.delivery],
    ]) {
      const block = element('div');
      block.append(element('h3', heading), element('p', text));
      story.append(block);
    }
    fragment.append(story);

    const stack = element('div', '', 'work-tags');
    stack.setAttribute('aria-label', 'Project technologies and skills');
    stack.append(...project.stack.map(name => element('span', name)));
    fragment.append(stack);

    if (project.url) {
      const link = element('a', `${project.link_label || 'Visit website'} ↗`, 'b1');
      link.href = project.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      fragment.append(link);
    }

    content.replaceChildren(fragment);
    document.body.classList.add('dialog-open');
    dialog.showModal();
    title.focus({ preventScroll: true });
  }

  document.querySelectorAll('[data-case]').forEach(button => {
    button.addEventListener('click', () => {
      const project = projects[button.dataset.case];
      if (project) showProject(project);
    });
  });

  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });
}
