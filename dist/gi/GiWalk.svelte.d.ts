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
export type GiWalkProps = typeof __propDef.props;
export type GiWalkEvents = typeof __propDef.events;
export type GiWalkSlots = typeof __propDef.slots;
export default class GiWalk extends SvelteComponentTyped<GiWalkProps, GiWalkEvents, GiWalkSlots> {
}
export {};
