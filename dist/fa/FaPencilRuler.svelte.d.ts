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
export type FaPencilRulerProps = typeof __propDef.props;
export type FaPencilRulerEvents = typeof __propDef.events;
export type FaPencilRulerSlots = typeof __propDef.slots;
export default class FaPencilRuler extends SvelteComponentTyped<FaPencilRulerProps, FaPencilRulerEvents, FaPencilRulerSlots> {
}
export {};
