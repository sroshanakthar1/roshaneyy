const About = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="card-glass rounded-2xl p-8 md:p-12 hover-lift animate-scale-in group">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-slide-in-left transition-colors duration-300 group-hover:text-foreground">
            I'm a passionate software developer with expertise in building modern web applications. 
            With a strong foundation in both frontend and backend technologies, I love turning ideas 
            into reality through clean, efficient code.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 animate-slide-in-left transition-colors duration-300 group-hover:text-foreground" style={{ animationDelay: '0.1s' }}>
            My journey in software development started with a curiosity about how things work, 
            and has evolved into a career focused on creating impactful digital solutions. 
            I'm constantly learning and staying up-to-date with the latest technologies and best practices.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-in-left transition-colors duration-300 group-hover:text-foreground" style={{ animationDelay: '0.2s' }}>
            When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
            projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
