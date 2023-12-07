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
export type DiCreativecommonsProps = typeof __propDef.props;
export type DiCreativecommonsEvents = typeof __propDef.events;
export type DiCreativecommonsSlots = typeof __propDef.slots;
export default class DiCreativecommons extends SvelteComponentTyped<DiCreativecommonsProps, DiCreativecommonsEvents, DiCreativecommonsSlots> {
}
export {};
