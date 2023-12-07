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
export type GiExpandedRaysProps = typeof __propDef.props;
export type GiExpandedRaysEvents = typeof __propDef.events;
export type GiExpandedRaysSlots = typeof __propDef.slots;
export default class GiExpandedRays extends SvelteComponentTyped<GiExpandedRaysProps, GiExpandedRaysEvents, GiExpandedRaysSlots> {
}
export {};
