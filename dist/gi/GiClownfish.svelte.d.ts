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
export type GiClownfishProps = typeof __propDef.props;
export type GiClownfishEvents = typeof __propDef.events;
export type GiClownfishSlots = typeof __propDef.slots;
export default class GiClownfish extends SvelteComponentTyped<GiClownfishProps, GiClownfishEvents, GiClownfishSlots> {
}
export {};
