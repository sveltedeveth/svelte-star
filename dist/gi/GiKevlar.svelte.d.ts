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
export type GiKevlarProps = typeof __propDef.props;
export type GiKevlarEvents = typeof __propDef.events;
export type GiKevlarSlots = typeof __propDef.slots;
export default class GiKevlar extends SvelteComponentTyped<GiKevlarProps, GiKevlarEvents, GiKevlarSlots> {
}
export {};
