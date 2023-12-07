import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DiCss3Props = typeof __propDef.props;
export type DiCss3Events = typeof __propDef.events;
export type DiCss3Slots = typeof __propDef.slots;
export default class DiCss3 extends SvelteComponentTyped<DiCss3Props, DiCss3Events, DiCss3Slots> {
}
export {};
