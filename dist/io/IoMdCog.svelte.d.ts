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
export type IoMdCogProps = typeof __propDef.props;
export type IoMdCogEvents = typeof __propDef.events;
export type IoMdCogSlots = typeof __propDef.slots;
export default class IoMdCog extends SvelteComponentTyped<IoMdCogProps, IoMdCogEvents, IoMdCogSlots> {
}
export {};
