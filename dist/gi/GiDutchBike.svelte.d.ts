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
export type GiDutchBikeProps = typeof __propDef.props;
export type GiDutchBikeEvents = typeof __propDef.events;
export type GiDutchBikeSlots = typeof __propDef.slots;
export default class GiDutchBike extends SvelteComponentTyped<GiDutchBikeProps, GiDutchBikeEvents, GiDutchBikeSlots> {
}
export {};
