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
export type GiSpearFeatherProps = typeof __propDef.props;
export type GiSpearFeatherEvents = typeof __propDef.events;
export type GiSpearFeatherSlots = typeof __propDef.slots;
export default class GiSpearFeather extends SvelteComponentTyped<GiSpearFeatherProps, GiSpearFeatherEvents, GiSpearFeatherSlots> {
}
export {};
