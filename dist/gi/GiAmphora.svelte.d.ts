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
export type GiAmphoraProps = typeof __propDef.props;
export type GiAmphoraEvents = typeof __propDef.events;
export type GiAmphoraSlots = typeof __propDef.slots;
export default class GiAmphora extends SvelteComponentTyped<GiAmphoraProps, GiAmphoraEvents, GiAmphoraSlots> {
}
export {};
