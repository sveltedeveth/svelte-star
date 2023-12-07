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
export type GiEarthAmericaProps = typeof __propDef.props;
export type GiEarthAmericaEvents = typeof __propDef.events;
export type GiEarthAmericaSlots = typeof __propDef.slots;
export default class GiEarthAmerica extends SvelteComponentTyped<GiEarthAmericaProps, GiEarthAmericaEvents, GiEarthAmericaSlots> {
}
export {};
