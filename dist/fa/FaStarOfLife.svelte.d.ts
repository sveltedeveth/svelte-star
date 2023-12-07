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
export type FaStarOfLifeProps = typeof __propDef.props;
export type FaStarOfLifeEvents = typeof __propDef.events;
export type FaStarOfLifeSlots = typeof __propDef.slots;
export default class FaStarOfLife extends SvelteComponentTyped<FaStarOfLifeProps, FaStarOfLifeEvents, FaStarOfLifeSlots> {
}
export {};
