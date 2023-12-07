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
export type GiVoodooDollProps = typeof __propDef.props;
export type GiVoodooDollEvents = typeof __propDef.events;
export type GiVoodooDollSlots = typeof __propDef.slots;
export default class GiVoodooDoll extends SvelteComponentTyped<GiVoodooDollProps, GiVoodooDollEvents, GiVoodooDollSlots> {
}
export {};
