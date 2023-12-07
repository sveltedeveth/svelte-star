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
export type GiStarSkullProps = typeof __propDef.props;
export type GiStarSkullEvents = typeof __propDef.events;
export type GiStarSkullSlots = typeof __propDef.slots;
export default class GiStarSkull extends SvelteComponentTyped<GiStarSkullProps, GiStarSkullEvents, GiStarSkullSlots> {
}
export {};
