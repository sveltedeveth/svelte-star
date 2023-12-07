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
export type GiChoppedSkullProps = typeof __propDef.props;
export type GiChoppedSkullEvents = typeof __propDef.events;
export type GiChoppedSkullSlots = typeof __propDef.slots;
export default class GiChoppedSkull extends SvelteComponentTyped<GiChoppedSkullProps, GiChoppedSkullEvents, GiChoppedSkullSlots> {
}
export {};
