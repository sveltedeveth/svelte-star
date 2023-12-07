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
export type DiCssdeckProps = typeof __propDef.props;
export type DiCssdeckEvents = typeof __propDef.events;
export type DiCssdeckSlots = typeof __propDef.slots;
export default class DiCssdeck extends SvelteComponentTyped<DiCssdeckProps, DiCssdeckEvents, DiCssdeckSlots> {
}
export {};
