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
export type GiMoebiusStarProps = typeof __propDef.props;
export type GiMoebiusStarEvents = typeof __propDef.events;
export type GiMoebiusStarSlots = typeof __propDef.slots;
export default class GiMoebiusStar extends SvelteComponentTyped<GiMoebiusStarProps, GiMoebiusStarEvents, GiMoebiusStarSlots> {
}
export {};
