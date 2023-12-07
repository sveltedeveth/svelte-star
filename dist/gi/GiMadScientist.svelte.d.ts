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
export type GiMadScientistProps = typeof __propDef.props;
export type GiMadScientistEvents = typeof __propDef.events;
export type GiMadScientistSlots = typeof __propDef.slots;
export default class GiMadScientist extends SvelteComponentTyped<GiMadScientistProps, GiMadScientistEvents, GiMadScientistSlots> {
}
export {};
