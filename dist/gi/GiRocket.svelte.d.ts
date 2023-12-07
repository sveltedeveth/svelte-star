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
export type GiRocketProps = typeof __propDef.props;
export type GiRocketEvents = typeof __propDef.events;
export type GiRocketSlots = typeof __propDef.slots;
export default class GiRocket extends SvelteComponentTyped<GiRocketProps, GiRocketEvents, GiRocketSlots> {
}
export {};
