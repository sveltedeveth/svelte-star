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
export type GiSkullInJarProps = typeof __propDef.props;
export type GiSkullInJarEvents = typeof __propDef.events;
export type GiSkullInJarSlots = typeof __propDef.slots;
export default class GiSkullInJar extends SvelteComponentTyped<GiSkullInJarProps, GiSkullInJarEvents, GiSkullInJarSlots> {
}
export {};
