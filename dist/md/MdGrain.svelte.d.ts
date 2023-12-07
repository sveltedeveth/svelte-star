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
export type MdGrainProps = typeof __propDef.props;
export type MdGrainEvents = typeof __propDef.events;
export type MdGrainSlots = typeof __propDef.slots;
export default class MdGrain extends SvelteComponentTyped<MdGrainProps, MdGrainEvents, MdGrainSlots> {
}
export {};
