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
export type GiRobberProps = typeof __propDef.props;
export type GiRobberEvents = typeof __propDef.events;
export type GiRobberSlots = typeof __propDef.slots;
export default class GiRobber extends SvelteComponentTyped<GiRobberProps, GiRobberEvents, GiRobberSlots> {
}
export {};
