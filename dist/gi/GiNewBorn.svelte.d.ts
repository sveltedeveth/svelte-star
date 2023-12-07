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
export type GiNewBornProps = typeof __propDef.props;
export type GiNewBornEvents = typeof __propDef.events;
export type GiNewBornSlots = typeof __propDef.slots;
export default class GiNewBorn extends SvelteComponentTyped<GiNewBornProps, GiNewBornEvents, GiNewBornSlots> {
}
export {};
