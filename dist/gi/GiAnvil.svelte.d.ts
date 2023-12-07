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
export type GiAnvilProps = typeof __propDef.props;
export type GiAnvilEvents = typeof __propDef.events;
export type GiAnvilSlots = typeof __propDef.slots;
export default class GiAnvil extends SvelteComponentTyped<GiAnvilProps, GiAnvilEvents, GiAnvilSlots> {
}
export {};
