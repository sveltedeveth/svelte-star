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
export type TiMediaPlayProps = typeof __propDef.props;
export type TiMediaPlayEvents = typeof __propDef.events;
export type TiMediaPlaySlots = typeof __propDef.slots;
export default class TiMediaPlay extends SvelteComponentTyped<TiMediaPlayProps, TiMediaPlayEvents, TiMediaPlaySlots> {
}
export {};
