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
export type IoLogoNpmProps = typeof __propDef.props;
export type IoLogoNpmEvents = typeof __propDef.events;
export type IoLogoNpmSlots = typeof __propDef.slots;
export default class IoLogoNpm extends SvelteComponentTyped<IoLogoNpmProps, IoLogoNpmEvents, IoLogoNpmSlots> {
}
export {};
