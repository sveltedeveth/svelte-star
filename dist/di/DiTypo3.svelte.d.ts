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
export type DiTypo3Props = typeof __propDef.props;
export type DiTypo3Events = typeof __propDef.events;
export type DiTypo3Slots = typeof __propDef.slots;
export default class DiTypo3 extends SvelteComponentTyped<DiTypo3Props, DiTypo3Events, DiTypo3Slots> {
}
export {};
