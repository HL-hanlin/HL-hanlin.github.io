---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---


I'm a first year Ph.D. student in the [MURGe-Lab](https://murgelab.cs.unc.edu/) at the University of North Carolina at Chapel Hill, advised by Prof. [Mohit Bansal](https://www.cs.unc.edu/~mbansal/). Prior to joining UNC, I received my master's degrees in Computer Science and Financial Engineering from Columbia University, where I was a member of the [DVMM Lab](https://www.ee.columbia.edu/ln/dvmm/) advised by Prof. [Shih-Fu Chang](https://www.ee.columbia.edu/~sfchang/) and a member of the [ROAM Lab](https://roam.me.columbia.edu/) advised by Prof. [Matei Ciocarlie](https://www.me.columbia.edu/faculty/matei-ciocarlie) and Prof. [Shuran Song](https://www.cs.columbia.edu/~shurans/). I also work closely with Prof. [Krzysztof Choromanski](https://research.google/people/KrzysztofChoromanski/).

<!--- at Columbia University, fortunate to be advised by Prof. [Shih-Fu Chang](https://www.ee.columbia.edu/~sfchang/) and [Guangxing Han](https://guangxinghan.github.io/) on few-shot learning with Transformers; Prof. [Matei Ciocarlie](https://www.me.columbia.edu/faculty/matei-ciocarlie), Prof. [Shuran Song](https://www.cs.columbia.edu/~shurans/), and [Jingxi Xu](https://jxu.ai/) on tactile exploration for 3D objects. I also have the great pleasure to work with Prof. [Krzysztof Choromanski](https://research.google/people/KrzysztofChoromanski/) on several projects related to kernelized attention on Transformers and Graph Neural Networks. -->

<!--- 
My research spans several fields of machine learning, including representation learning, reinforcement learning, deep learning frameworks design (e.g. Transformers, GNNs), as well as Monte Carlo methods. Despite such diversity, I'm chiefly fond of the **theory-grounded algorithms** with applications in computer vision and robotics. Specifically, my research aims at making algorithms more *efficient* \[[1](#Topographer),[5](#HRF),[7](#OMC)\] and *scalable* \[[4](#Toeplitz),
[6](#GKAT)], as well as designing *simple but effective* \[[2](#SMKD)\] learning algorithms as a *better alternative to traditional heuristics* \[[3](#TANDEM)\]. 
My research spans several fields of machine learning, including representation learning, reinforcement learning, as well as deep learning frameworks design (e.g. Transformers, GNNs). Despite such diversity, I'm chiefly fond of the theory-grounded algorithms with applications in computer vision and robotics. -->

My recent research focuses on generative models, multimodal learning, and LLMs. I'm also broadly interested in theory-grounded algorithms for efficient machine learning.

You can find my CV [here](https://HL-hanlin.github.io/files/han_lin_resume.pdf).

Feel free to email/[wechat](https://HL-hanlin.github.io/files/wechat.pdf) me if you would like to chat about any research ideas! :)

<!--- **I'm applying for Fall 2023 CS Ph.D. programs and looking for Spring & Summer 2023 research assistant positions. Feel free to reach out!** -->

<br/>


<h1 id="publications"> Publications</h1>

<h2 id="2023"> 2023</h2>

- ### <a name="DiagrammerGPT"></a> **(Preprint 2023)** [**DiagrammerGPT: Generating Open-Domain, Open-Platform Diagrams via LLM Planning**](https://arxiv.org/abs/2310.12128)
Abhay Zala, **Han Lin**, Jaemin Cho, Mohit Bansal
<br>\[[Paper](https://arxiv.org/abs/2310.12128)\]\[[Project Page](https://diagrammergpt.github.io/)\]
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/DiagrammerGPT.png?raw=true"  width="600px"/>
</p>


- ### <a name="VideoDirectorGPT"></a> **(Preprint 2023)** [**VideoDirectorGPT: Consistent Multi-Scene Video Generation via LLM-Guided Planning**](https://arxiv.org/abs/2309.15091)
**Han Lin**, Abhay Zala, Jaemin Cho, Mohit Bansal
<br>\[[Paper](https://arxiv.org/abs/2309.15091)\]\[[Project Page](https://videodirectorgpt.github.io)\]
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/video_plan.png?raw=true"  width="600px"/>
</p>


- ### <a name="Topographer"></a> **(ICML 2023)** [**Efficient Graph Field Integrators Meet Point Clouds**](https://arxiv.org/abs/2302.00942)
*Krzysztof Choromanski\*, Arijit Sehanobish\*, **Han Lin**\*, Yunfan Zhao\*, Eli Berger, Alvin Pan, Tetiana Parshakova, Tianyi Zhang, David Watkins, Valerii Likhosherstov, Somnath Basu Roy Chowdhury, Avinava Dubey, Deepali Jain, Tamas Sarlos, Snigdha Chaturvedi, Adrian Weller*
<br>\[[Paper](https://arxiv.org/abs/2302.00942)\]
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/ICML2023_front_image.png?raw=true"  width="600px"/>
</p>
<!--- Highlight: We present two new classes of algorithms for efficient field integration on graphs encoding point clouds. 
<br><br>  -->

- ### <a name="SMKD"></a> **(CVPR 2023)** [**Supervised Masked Knowledge Distillation for Few-shot Transformers**](https://arxiv.org/abs/2303.15466)
***Han Lin**\*, Guangxing Han\*, Jiawei Ma, Shiyuan Huang, Xudong Lin, Shih-Fu Chang*
<br>\[[Paper](https://arxiv.org/abs/2303.15466)\]\[[Code](https://github.com/HL-hanlin/SMKD)\]\[[Slides](https://www.dropbox.com/s/29n9gjgzbqjqqbk/SMKD.pdf?dl=0)\]
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/SMKD3.png?raw=true"  width="600px"/>
</p>
<!--- Highlight: We propose a novel framework for few-shot Transformers which incorporates label information into self-distillation. Compared with previous self-supervised methods, we allow intra-class knowledge distillation on both class and patch tokens, and introduce the challenging task of masked patch tokens reconstruction across intra-class images.   
<br><br>  -->


- ### <a name="TANDEM"></a> **(ICRA 2023)** [**Active Tactile Exploration for 3D Object Recognition**](https://arxiv.org/abs/2209.08772)
*Jingxi Xu\*, **Han Lin\***, Shuran Song, Matei Ciocarlie*
<br>\[[Paper](https://arxiv.org/abs/2209.08772)\]\[[Project Page](https://jxu.ai/tandem3d/)\]\[[Video](https://www.youtube.com/watch?v=z_90xVf1-88)\]
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/TANDEM.png?raw=true" height='250px' width="550px"/>
</p>
<!--- Highlight: We propose TANDEM3D, a co-training framework for exploration and decision making to 3D object recognition with tactile signals. TANDEM3D is based on a novel encoder that builds 3D object representation from contact positions and normals using PointNet++, and enables 6DOF movement.
<br><br> -->


<h2 id="2022"> 2022</h2>

- ### <a name="Toeplitz"></a> **(ICML 2022)** [**From block-Toeplitz matrices to differential equations on graphs: towards a general theory for scalable masked Transformers**](http://arxiv.org/abs/2107.07999)
*Krzysztof Choromanski\*, **Han Lin**\*, Haoxian Chen\*, Tianyi Zhang, Arijit Sehanobish, Valerii Likhosherstov, Jack Parker-Holder, Tamas Sarlos, Adrian Weller, Thomas Weingarten*
<br>\[[Paper](http://arxiv.org/abs/2107.07999)\]\[[Code](https://github.com/HL-hanlin/GKAT)\]\[[Poster](https://icml.cc/media/PosterPDFs/ICML%202022/f231f2107df69eab0a3862d50018a9b2_mzhGQSV.png)\]
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/Toeplitz.png?raw=true" height='170px'  width="600px"/>
</p>
<!---  Highlight: We leverage many mathematical techniques ranging from spectral analysis through dynamic programming and random walks and proposed a comprehensive approach for incorporating various masking mechanisms into Transformers architectures in a scalable way, including efficient d-dimensional RPE-masking and graph-kernel masking.
<br><br>  -->


- ### <a name="HRF"></a> **(ICLR 2022)** [**Hybrid Random Features**](https://arxiv.org/abs/2110.04367)
*Krzysztof Choromanski\*, **Han Lin**\*, Haoxian Chen\*, Yuanzhe Ma\*, Arijit Sehanobish\*, Deepali Jain, Michael S Ryoo, Jake Varley, Andy Zeng, Valerii Likhosherstov, Dmitry Kalashnikov, Vikas Sindhwani, Adrian Weller*
<br>\[[Paper](https://arxiv.org/abs/2110.04367)\]\[[Code](https://github.com/HL-hanlin/HRF_ICLR2022)\]\[[Video](https://iclr.cc/virtual/2022/poster/6410)\]\[[Slides](https://iclr.cc/media/iclr-2022/Slides/6410.pdf)\]
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/HRF.png?raw=true" width="600px"/>
</p>
<!---  Highlight: We propose a new class of random feature methods for linearizing softmax and Gaussian kernels called hybrid random features (HRFs) equipted with strong theoretical guarantees - unbiased approximation and strictly smaller worst-case relative errors than its counterparts.  
<br><br>  -->


<h2 id="2021"> 2021</h2>

- ### <a name="GKAT"></a> **(Preprint 2021)** [**Graph Kernel Attention Transformers**](https://github.com/HL-hanlin/GKAT/blob/main/GKAT_16Jul2021.pdf)
*Krzysztof Choromanski\*, **Han Lin**\*, Haoxian Chen\*, Jack Parker-Holder*
<br>\[[Paper](https://github.com/HL-hanlin/GKAT/blob/main/GKAT_16Jul2021.pdf)\]\[[Code](https://github.com/HL-hanlin/GKAT)\]
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/GKAT.png?raw=true"  width="600px"/>
</p>
<!---  Highlight: We introduce a new class of graph neural networks, called GKAT, by combining several concepts that were so far studied independently - graph kernels, attention-based networks with structural priors and more recently, efficient Transformers architectures applying small memory footprint implicit attention methods via low rank decomposition techniques.
<br><br>   -->


<h2 id="2020"> 2020</h2>

- ### <a name="OMC"></a> **(NeurIPS 2020)** [**Demystifying Orthogonal Monte Carlo and Beyond**](https://arxiv.org/abs/2005.13590)
***Han Lin**\*, Haoxian Chen\*, Tianyi Zhang, Clement Laroche, Krzysztof Choromanski*
<br>\[[Paper](https://arxiv.org/abs/2005.13590)\]\[[Code](https://github.com/HL-hanlin/OMC)\]\[[Video](https://slideslive.com/38936089/demystifying-orthogonal-monte-carlo-and-beyond?ref=search-presentations-orthogonal+monte+carlo+and+be)\]
<!---<img align='center' src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/OMC.png?raw=true"  width="700px"/>-->
<p align="center">
<img src="https://github.com/HL-hanlin/HL-hanlin.github.io/blob/master/images/OMC2.png?raw=true"  width="600px"/>
</p>
<!---  Highlight: In this paper we shed new light on the theoretical principles behind Orthogonal Monte Carlo (OMC), applying theory of negatively dependent random variables to obtain several new concentration results. We also propose a novel extensions of the method leveraging number theory techniques and particle algorithms, called Near-Orthogonal Monte Carlo (NOMC). 
<br><br>   -->



\* Equal contribution.
<br><br>
<!--- 
Slideslive video recording and conference poster presenter for \[[5](https://iclr.cc/virtual/2022/poster/6410), [7](https://slideslive.com/38936089/demystifying-orthogonal-monte-carlo-and-beyond?ref=search-presentations-orthogonal+monte+carlo+and+be)\]. \\
Github code maintainer for \[[2](https://github.com/HL-hanlin/SMKD), [4](https://github.com/HL-hanlin/GKAT), [5](https://github.com/HL-hanlin/HRF_ICLR2022), [7](https://github.com/HL-hanlin/OMC)\], contributor for \[[3](https://jxu.ai/tandem3d/)\].
<br />
-->



<h1 id="teaching"> Teaching Assistants</h1>

<!---
- [COMS 4231 Analysis of Algorithms](http://www.cs.columbia.edu/~mihalis/cs4231/syllabus.html), Fall 2022
  - Prof. Mihalis Yannakakis, Department of Computer Science, Columbia University
- [COMS 4732 Computer Vision 2: Learning](https://drive.google.com/drive/folders/1WBraYFj2umBYm4yf057BqIJKtwP5KAP5), Spring 2022 
  - Prof. Carl Vondrick, Department of Computer Science, Columbia University
- [COMS 4721 Machine Learning for Data Science](https://www.cs.columbia.edu/~djhsu/coms4771-f20/), Spring 2022 
  - Prof. Daniel Hsu, Department of Computer Science, Columbia University
- [QMSS 5073 Machine Learning for Social Science](https://www.coursicle.com/columbia/courses/QMSS/G5073/), Fall 2021
  - Prof. Michael Parrott, Department of Statistics, Columbia University
- [IEOR 4007 Optimization Models & Methods for FE](https://www.coursicle.com/columbia/courses/IEOR/E4007/), Fall 2019 
  - Prof. Garud Iyengar, Department of IEOR, Columbia University
- [IEOR 4418 Transportation Analytics & Logistics](https://www.coursicle.com/columbia/courses/IEOR/E4418/), Spring 2019 
  - Prof. Adam Elmachtoub, Department of IEOR, Columbia University
-->

- [COMS 4231 Analysis of Algorithms](http://www.cs.columbia.edu/~mihalis/cs4231/syllabus.html), Fall 2022, Columbia University
- [COMS 4732 Computer Vision 2: Learning](https://drive.google.com/drive/folders/1WBraYFj2umBYm4yf057BqIJKtwP5KAP5), Spring 2022, Columbia University
- [COMS 4721 Machine Learning for Data Science](https://www.cs.columbia.edu/~djhsu/coms4771-f20/), Spring 2022, Columbia University
- [QMSS 5073 Machine Learning for Social Science](https://www.coursicle.com/columbia/courses/QMSS/G5073/), Fall 2021, Columbia University
- [IEOR 4007 Optimization Models & Methods for FE](https://www.coursicle.com/columbia/courses/IEOR/E4007/), Fall 2019, Columbia University
- [IEOR 4418 Transportation Analytics & Logistics](https://www.coursicle.com/columbia/courses/IEOR/E4418/), Spring 2019, Columbia University

<br />



<h1 id="services"> Academic Services</h1>


- Conference Reviewer: ICLR 2024, ICML 2022/2023/2024; NeurIPS 2022/2023
- Conference Volunteer: RSS 2022


