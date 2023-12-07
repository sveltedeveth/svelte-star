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
export type GiDiscGolfBagProps = typeof __propDef.props;
export type GiDiscGolfBagEvents = typeof __propDef.events;
export type GiDiscGolfBagSlots = typeof __propDef.slots;
export default class GiDiscGolfBag extends SvelteComponentTyped<GiDiscGolfBagProps, GiDiscGolfBagEvents, GiDiscGolfBagSlots> {
}
export {};
