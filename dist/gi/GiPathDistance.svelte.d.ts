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
export type GiPathDistanceProps = typeof __propDef.props;
export type GiPathDistanceEvents = typeof __propDef.events;
export type GiPathDistanceSlots = typeof __propDef.slots;
export default class GiPathDistance extends SvelteComponentTyped<GiPathDistanceProps, GiPathDistanceEvents, GiPathDistanceSlots> {
}
export {};
