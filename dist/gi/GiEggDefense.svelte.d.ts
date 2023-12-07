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
export type GiEggDefenseProps = typeof __propDef.props;
export type GiEggDefenseEvents = typeof __propDef.events;
export type GiEggDefenseSlots = typeof __propDef.slots;
export default class GiEggDefense extends SvelteComponentTyped<GiEggDefenseProps, GiEggDefenseEvents, GiEggDefenseSlots> {
}
export {};
