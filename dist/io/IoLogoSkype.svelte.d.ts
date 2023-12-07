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
export type IoLogoSkypeProps = typeof __propDef.props;
export type IoLogoSkypeEvents = typeof __propDef.events;
export type IoLogoSkypeSlots = typeof __propDef.slots;
export default class IoLogoSkype extends SvelteComponentTyped<IoLogoSkypeProps, IoLogoSkypeEvents, IoLogoSkypeSlots> {
}
export {};
