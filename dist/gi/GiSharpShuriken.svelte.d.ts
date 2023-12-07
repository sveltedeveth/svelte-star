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
export type GiSharpShurikenProps = typeof __propDef.props;
export type GiSharpShurikenEvents = typeof __propDef.events;
export type GiSharpShurikenSlots = typeof __propDef.slots;
export default class GiSharpShuriken extends SvelteComponentTyped<GiSharpShurikenProps, GiSharpShurikenEvents, GiSharpShurikenSlots> {
}
export {};
