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
export type GoStarProps = typeof __propDef.props;
export type GoStarEvents = typeof __propDef.events;
export type GoStarSlots = typeof __propDef.slots;
export default class GoStar extends SvelteComponentTyped<GoStarProps, GoStarEvents, GoStarSlots> {
}
export {};
