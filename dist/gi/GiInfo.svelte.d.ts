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
export type GiInfoProps = typeof __propDef.props;
export type GiInfoEvents = typeof __propDef.events;
export type GiInfoSlots = typeof __propDef.slots;
export default class GiInfo extends SvelteComponentTyped<GiInfoProps, GiInfoEvents, GiInfoSlots> {
}
export {};
