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
export type GiSeaStarProps = typeof __propDef.props;
export type GiSeaStarEvents = typeof __propDef.events;
export type GiSeaStarSlots = typeof __propDef.slots;
export default class GiSeaStar extends SvelteComponentTyped<GiSeaStarProps, GiSeaStarEvents, GiSeaStarSlots> {
}
export {};
