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
export type FaFishProps = typeof __propDef.props;
export type FaFishEvents = typeof __propDef.events;
export type FaFishSlots = typeof __propDef.slots;
export default class FaFish extends SvelteComponentTyped<FaFishProps, FaFishEvents, FaFishSlots> {
}
export {};
