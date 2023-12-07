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
export type GiFlatStarProps = typeof __propDef.props;
export type GiFlatStarEvents = typeof __propDef.events;
export type GiFlatStarSlots = typeof __propDef.slots;
export default class GiFlatStar extends SvelteComponentTyped<GiFlatStarProps, GiFlatStarEvents, GiFlatStarSlots> {
}
export {};
