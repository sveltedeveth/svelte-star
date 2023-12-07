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
export type DiOperaProps = typeof __propDef.props;
export type DiOperaEvents = typeof __propDef.events;
export type DiOperaSlots = typeof __propDef.slots;
export default class DiOpera extends SvelteComponentTyped<DiOperaProps, DiOperaEvents, DiOperaSlots> {
}
export {};
