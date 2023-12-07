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
export type GiLaserSparksProps = typeof __propDef.props;
export type GiLaserSparksEvents = typeof __propDef.events;
export type GiLaserSparksSlots = typeof __propDef.slots;
export default class GiLaserSparks extends SvelteComponentTyped<GiLaserSparksProps, GiLaserSparksEvents, GiLaserSparksSlots> {
}
export {};
