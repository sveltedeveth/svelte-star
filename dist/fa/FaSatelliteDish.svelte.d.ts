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
export type FaSatelliteDishProps = typeof __propDef.props;
export type FaSatelliteDishEvents = typeof __propDef.events;
export type FaSatelliteDishSlots = typeof __propDef.slots;
export default class FaSatelliteDish extends SvelteComponentTyped<FaSatelliteDishProps, FaSatelliteDishEvents, FaSatelliteDishSlots> {
}
export {};
