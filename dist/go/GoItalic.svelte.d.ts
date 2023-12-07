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
export type GoItalicProps = typeof __propDef.props;
export type GoItalicEvents = typeof __propDef.events;
export type GoItalicSlots = typeof __propDef.slots;
export default class GoItalic extends SvelteComponentTyped<GoItalicProps, GoItalicEvents, GoItalicSlots> {
}
export {};
