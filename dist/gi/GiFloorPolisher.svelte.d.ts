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
export type GiFloorPolisherProps = typeof __propDef.props;
export type GiFloorPolisherEvents = typeof __propDef.events;
export type GiFloorPolisherSlots = typeof __propDef.slots;
export default class GiFloorPolisher extends SvelteComponentTyped<GiFloorPolisherProps, GiFloorPolisherEvents, GiFloorPolisherSlots> {
}
export {};
