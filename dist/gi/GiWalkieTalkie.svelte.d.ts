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
export type GiWalkieTalkieProps = typeof __propDef.props;
export type GiWalkieTalkieEvents = typeof __propDef.events;
export type GiWalkieTalkieSlots = typeof __propDef.slots;
export default class GiWalkieTalkie extends SvelteComponentTyped<GiWalkieTalkieProps, GiWalkieTalkieEvents, GiWalkieTalkieSlots> {
}
export {};
