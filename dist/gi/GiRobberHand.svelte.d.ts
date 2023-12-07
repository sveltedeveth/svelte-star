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
export type GiRobberHandProps = typeof __propDef.props;
export type GiRobberHandEvents = typeof __propDef.events;
export type GiRobberHandSlots = typeof __propDef.slots;
export default class GiRobberHand extends SvelteComponentTyped<GiRobberHandProps, GiRobberHandEvents, GiRobberHandSlots> {
}
export {};
