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
export type GiStarStruckProps = typeof __propDef.props;
export type GiStarStruckEvents = typeof __propDef.events;
export type GiStarStruckSlots = typeof __propDef.slots;
export default class GiStarStruck extends SvelteComponentTyped<GiStarStruckProps, GiStarStruckEvents, GiStarStruckSlots> {
}
export {};
