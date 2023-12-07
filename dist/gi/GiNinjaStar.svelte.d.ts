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
export type GiNinjaStarProps = typeof __propDef.props;
export type GiNinjaStarEvents = typeof __propDef.events;
export type GiNinjaStarSlots = typeof __propDef.slots;
export default class GiNinjaStar extends SvelteComponentTyped<GiNinjaStarProps, GiNinjaStarEvents, GiNinjaStarSlots> {
}
export {};
