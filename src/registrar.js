import { LitElement, html, css, property } from 'lit-element';

class RegistrationForm extends LitElement {
  @property({ type: String }) username = '';
  @property({ type: String }) email = '';
  @property({ type: String }) password = '';
  @property({ type: String }) fullName = '';
  @property({ type: Number }) age = null;
  @property({ type: String }) identification = '';
  @property({ type: String }) city = '';

  static styles = css`

  `;

  render() {
    return html`
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">Usuario</label>
                <input type="text" class="form-control form-control-lg" id="username" .value="${this.username}" @input="${(e) => this.username = e.target.value}" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control form-control-lg" id="email" .value="${this.email}" @input="${(e) => this.email = e.target.value}" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Contraseña</label>
                <input type="password" class="form-control form-control-lg" id="password" .value="${this.password}" @input="${(e) => this.password = e.target.value}" required>
              </div>
              <div class="mb-3">
                <label for="fullName" class="form-label">Nombre Completo</label>
                <input type="text" class="form-control form-control-lg" id="fullName" .value="${this.fullName}" @input="${(e) => this.fullName = e.target.value}" required>
              </div>
              <div class="mb-3">
                <label for="age" class="form-label">Edad</label>
                <input type="number" class="form-control form-control-lg" id="age" .value="${this.age}" @input="${(e) => this.age = parseInt(e.target.value)}" required>
              </div>
              <div class="mb-3">
                <label for="identification" class="form-label">Identificación</label>
                <input type="text" class="form-control form-control-lg" id="identification" .value="${this.identification}" @input="${(e) => this.identification = e.target.value}" required>
              </div>
              <div class="mb-3">
                <label for="city" class="form-label">Ciudad</label>
                <input type="text" class="form-control form-control-lg" id="city" .value="${this.city}" @input="${(e) => this.city = e.target.value}" required>
              </div>
              <button type="submit" class="btn btn-primary">Registrarse</button>
            </form>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('registration-form', RegistrationForm);