import React from 'react';

import { TableOfContents } from '../../../layouts/components/toc';
import { Headline } from '../../../layouts/components/headline';
import { toc } from './toc';
import { Pagination } from '../../../layouts/components/pagination';
import { CodeBlock } from '../../../layouts/components/codeblock';

export const VariantsPage: React.FC<any> = (props) => {
    return (
        <main className="page-layout">
            <div>
                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Variants" link="#variants" />
                        <div className="divider"></div>
                        <p>
                            Besides your typical clickable button, buttons also come in other forms to support other use
                            case.
                        </p>
                    </div>
                </section>

                <section className="padtop" id="animated">
                    <div className="content">
                        <Headline title="Animated Button" link="#animated" />
                        <div className="divider"></div>
                        <p>
                            The <code>.btn-animated</code> class adds a slight "push" to the button when clicked.
                        </p>

                        
                        <div className="btn-container">
                            <button className="btn-animated">Button</button>
                        </div>
                        <div className="btn-container">
                            <div className="btn btn-animated">Button</div>
                        </div>
                        <div className="btn-container">
                            <input className="btn-animated" type="submit" value="Submit" />
                        </div>

                        <CodeBlock code={`<button class="btn-animated">Button</button>
<div class="btn btn-animated">Button</div>
<input class="btn-animated" type="submit" value="Submit" />`} language='htmlbars' />
                    </div>
                </section>

                <section className="padtop" id="disabled">
                    <div className="content">
                        <Headline title="Disabled Button" link="#disabled" />
                        <div className="divider"></div>
                        <p>
                            Add the <code>disabled</code> keyword to make the button unselectable.
                        </p>

                        <blockquote className="bg-orange-200 text-orange-700" style={{
                            fontSize: '1rem'
                        }}>Note that this is not supported for buttons created using <code>div</code> tags.</blockquote>

                        <button disabled>Disabled</button>
                        
                        <CodeBlock code={`<button class="btn-animated">Button</button>
<div class="btn btn-animated">Button</div>
<input class="btn-animated" type="submit" value="Submit" />`} language='htmlbars' />
                    </div>
                </section>

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Loading Button" link="#loading" />
                        <div className="divider"></div>
                        <p>
                            Add the <code>.animated</code> and <code>.loading</code> classes to create a button containing a spinner. Since it relies on the button to contain text for height, you must specify some text. To hide the text, you just need to add the <code>.hide-text</code> class as well.
                        </p>

                        <button className="animated loading hide-text">123</button>
                        
                        <CodeBlock code={`<button class="btn-animated">Button</button>
<div class="btn btn-animated">Button</div>
<input class="btn-animated" type="submit" value="Submit" />`} language='htmlbars' />

                        <p>To display text, there are two helper classes created to show text to the left and right of the spinner.</p>

                        <p>To set the spinner to appear to the left of text, use the <code>.loading-left</code> class.</p> 
                        <button className="animated loading loading-left btn-link">Loading</button>
                        <CodeBlock code={`<button class="animated loading loading-left btn-link">Loading</button>`} language='htmlbars' />

                        <p>To set the spinner to appear to the right of text, use the <code>.loading-right</code> class.</p> 
                        <button className="animated loading loading-right btn-link">Loading</button>
                        <CodeBlock code={`<button class="animated loading loading-right btn-link">Loading</button>`} language='htmlbars' />

                    </div>
                </section>

                <section className="padtop" id="variants">
                    <div className="content">
                        <Headline title="Close Button" link="#close" />
                        <div className="divider"></div>
                        <p>
                            This is the generic close button control that can be added to other components in Cirrus. Below is an example of a <code>.frame</code> containing a <code>.btn-close</code>.
                        </p>

                        <div className="frame mb-3">
                            <div className="frame__header">
                                <span className="pb-1"><b>This is a popup.</b></span>
                                <button className="btn-close u-pull-right"></button>
                            </div>
                            <div className="frame__body">
                                <p>You can close me now.</p>
                            </div>
                        </div>
                        <CodeBlock
                            code={`<div class="frame">
    <div class="frame__header"><span class="pb-1"><b>This is a popup.</b></span>
        <button class="btn-close u-pull-right"></button>
    </div>
    <div class="frame__body">
        <p>You can close me now.</p>
    </div>
</div>`}
                            language="htmlbars"
                        />
                    </div>
                </section>

                <Pagination prevLink={{ name: 'Glyphs', link: './glyphs' }} />
            </div>
            <TableOfContents entries={toc} />
        </main>
    );
};
