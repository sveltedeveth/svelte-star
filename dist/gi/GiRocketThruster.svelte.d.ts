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
export type GiRocketThrusterProps = typeof __propDef.props;
export type GiRocketThrusterEvents = typeof __propDef.events;
export type GiRocketThrusterSlots = typeof __propDef.slots;
export default class GiRocketThruster extends SvelteComponentTyped<GiRocketThrusterProps, GiRocketThrusterEvents, GiRocketThrusterSlots> {
}
export {};
